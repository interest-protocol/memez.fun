import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import CreateProfileButton from '@/views/create-profile/create-profile-button';

import InputField from '../input-field';
import UploadImage from '../upload-image';

const EditProfileModal: FC = () => {
  return (
    <Div>
      <Div
        p="1.5rem"
        width="100%"
        bg="#131419"
        minHeight="10rem"
        borderRadius="0.75rem"
        border="1px solid #24282D"
      >
        <Div gap="1rem" display="flex" color="#E4E7EB" flexDirection="column">
          <UploadImage name="imageUrl" />
          <InputField tooltipDescription="username" placeholder="username" />
          <InputField
            tooltipDescription="Profile description"
            placeholder="Description"
            isTextArea
          />
        </Div>
      </Div>
      <CreateProfileButton />
    </Div>
  );
};

export default EditProfileModal;
