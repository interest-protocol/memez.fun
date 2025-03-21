import { Div, Label, P } from '@stylin.js/elements';
import { propOr } from 'ramda';
import { ChangeEventHandler, DragEventHandler, FC, useState } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import toast from 'react-hot-toast';

import { ImageCardSVG } from '@/components/svg';

import {
  CreateCoinForm,
  UploadImageProps,
} from '../../views/create-coin/create-coin.types';
import { getBase64 } from '../../views/create-coin/create-coin.utils';

const UploadImage: FC<UploadImageProps> = ({ isReview }) => {
  const { setValue, control } = useFormContext<CreateCoinForm>();
  const currentImageUrl = useWatch({ control, name: 'imageUrl' });
  const [dragging, setDragging] = useState(false);

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = async (e) => {
    if (isReview) return;

    const file = e.target.files?.[0];

    if (!file) return toast.error('Something went wrong');

    if (!file.type.includes('image/'))
      return toast.error('Make sure that you are sending an image');

    const imageBase64 = await getBase64(file).catch(() =>
      toast.error('Something went wrong')
    );

    setValue('imageUrl', imageBase64);
  };

  const handleDropFile: DragEventHandler<HTMLDivElement> = async (e) => {
    if (isReview) return;
    e.preventDefault();

    if (e.dataTransfer.items) {
      const item = e.dataTransfer.items[0];

      if (item.kind !== 'file' || !item.type.includes('image/'))
        return toast.error('Make sure that you are sending an image');

      const file = item.getAsFile();

      if (!file) return toast.error('Something went wrong');

      const imageBase64 = await getBase64(file).catch((e) =>
        toast.error(propOr('Something went wrong', 'message', e))
      );

      setValue('imageUrl', imageBase64);

      return;
    }

    const file = e.dataTransfer.files[0];

    if (!file) return toast.error('Something went wrong');

    if (!file.type.includes('image/'))
      return toast.error('Make sure that you are sending an image');

    const imageBase64 = await getBase64(file).catch(() =>
      toast.error('Something went wrong')
    );

    setValue('imageUrl', imageBase64);
  };

  return (
    <Div>
      <Div
        p="l"
        mx="auto"
        gap="m"
        bg="#24282D"
        width="6.25rem"
        backgroundImage={`url('${currentImageUrl}')`}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        height="6.25rem"
        display="flex"
        flexDirection="column"
        borderRadius="100px"
        borderWidth="1px"
        onDrop={handleDropFile}
        onDragEnter={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        onDragOver={(e) => e.preventDefault()}
        borderStyle={dragging ? 'solid' : 'dashed'}
        borderColor={dragging ? '#F6C853' : '#90939D'}
        color="#fff"
      >
        {!isReview && (
          <Label
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            htmlFor="file"
            cursor="pointer"
            height="100%"
            width="100%"
            borderRadius="100px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Div
              display="flex"
              width="0.875rem"
              height="1.25rem"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
            >
              <ImageCardSVG maxWidth="100%" maxHeight="100%" width="100%" />
            </Div>
            <P fontSize="0.75rem">
              Upload Image
              <Div display="none">
                <input
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={handleChangeFile}
                />
              </Div>
            </P>
          </Label>
        )}
      </Div>
      {!isReview && (
        <P mt="0.5rem" color="#90939D" textAlign="center" fontSize="0.75rem">
          Avatar • Max size 5MB
        </P>
      )}
    </Div>
  );
};

export default UploadImage;
