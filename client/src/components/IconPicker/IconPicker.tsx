import React, { FC, useState } from 'react';
import { BaseEmoji, Picker, Emoji } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';
import { StyledUserIconLayout, StyledUserIconEmoji } from './styled';

const IconPicker: FC = () => {
  const [icon, setIcon] = useState<null | BaseEmoji>(null);
  const [showPicker, setShowPicker] = useState(false);
  const handleAddEmoji = (emoji: BaseEmoji) => {
    setIcon(emoji);
    setShowPicker(false);
  };
  return (
    <StyledUserIconLayout>
      <StyledUserIconEmoji onClick={() => setShowPicker(!showPicker)}>
        {icon === null ? (
          <Emoji emoji=":question:" set="apple" size={24} />
        ) : (
          <Emoji emoji={icon} size={24} />
        )}
      </StyledUserIconEmoji>
      {showPicker && (
        <Picker
          set="apple"
          title="Select your user icon"
          style={{ position: 'absolute', bottom: '20px', right: '20px' }}
          onSelect={handleAddEmoji}
        />
      )}
    </StyledUserIconLayout>
  );
};

export default IconPicker;
