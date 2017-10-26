import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import TextInput from '../components/TextInput';
import ButtonAdd from '../components/ButtonAdd';
import App from '../App';

storiesOf('TextInput', module)
  .add('Empty', () => <TextInput text='' />)
  .add('WithText', () => <TextInput text='Example text' onChange={action('Changed text')} />)

storiesOf('Button', module)
  .add('Enabled', () => <ButtonAdd disabled={false} onClick={action('click on button')} />)
  .add('Disabled', () => <ButtonAdd disabled onClick={action('click on button')} />)

storiesOf('App', module)
  .add('Base', () => <App />)