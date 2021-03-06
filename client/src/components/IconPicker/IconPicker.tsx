import React, { FC, useState } from 'react';
import { BaseEmoji, Picker, Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import {
  StyledUserIconLayout,
  StyledUserIconEmoji,
  StyledIconPicker,
} from './styled';
import store from '../../stores/store';

const IconPicker: FC = () => {
  const { userEmoji } = store.currentUser;
  const [showPicker, setShowPicker] = useState(false);
  const handleAddEmoji = (emoji: BaseEmoji) => {
    store.setCurrentUserEmoji(emoji.id);
    setShowPicker(false);
  };
  return (
    <StyledIconPicker>
      <StyledUserIconLayout>
        <StyledUserIconEmoji onClick={() => setShowPicker(!showPicker)}>
          {userEmoji ? (
            <Emoji emoji={userEmoji} size={24} />
          ) : (
            <Emoji emoji=":question:" set="apple" size={24} />
          )}
        </StyledUserIconEmoji>
        {showPicker && (
          <Picker
            set="apple"
            title="Select your user icon"
            style={{ position: 'absolute', bottom: '20px', right: '20px' }}
            onSelect={handleAddEmoji}
            recent={[
              'teacher',
              'student',
              'mechanic',
              'factory_worker',
              'technologist',
            ]}
            emojisToShowFilter={(emoji) => {
              const forbiddenEmojis = [
                'Black Question Mark Ornament',
                'Hot Beverage',
              ];
              return !(emoji.name && forbiddenEmojis.includes(emoji.name));
            }}
          />
        )}
      </StyledUserIconLayout>
    </StyledIconPicker>
  );
};

export default IconPicker;
