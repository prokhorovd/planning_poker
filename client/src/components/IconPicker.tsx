import React, {useState} from 'react';
import 'emoji-mart/css/emoji-mart.css'
import {BaseEmoji, Picker, Emoji} from 'emoji-mart';
import './IconPicker.css';

function IconPicker() {
  const [icon, setIcon] = useState<null | BaseEmoji>(null);
  const [showPicker, setShowPicker] = useState(false);
  const handleAddEmoji = (emoji: BaseEmoji) => {
    setIcon(emoji);
    setShowPicker(false);
  }
  return (
    <div className='user-icon'>
      <div className='user-icon__emoji' onClick={() => setShowPicker(!showPicker)}>
        {icon === null ? <Emoji emoji=':question:' set='apple' size={24} /> : <Emoji emoji={icon} size={24} />}
      </div>
      {showPicker &&
        <Picker
          set='apple'
          title='Select your user icon'
          style={{ position: 'absolute', bottom: '20px', right: '20px' }}
          onSelect={handleAddEmoji}
        />
      }
    </div>
  );
}

export default IconPicker;
