import {SAVE_COMMAND_CARD_CONFIG} from './types';

export const saveCommandCardConfig = (config) => {
   return {
    type: SAVE_COMMAND_CARD_CONFIG,
    payload: config
    };
};