import {SAVE_UNIT_CARD_CONFIG} from './types';

export const saveUnitCardConfig = (config) => {
   return {
    type: SAVE_UNIT_CARD_CONFIG,
    payload: config
    };
};