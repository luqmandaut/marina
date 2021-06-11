import { createNetwork } from '../../../domain/network';
import { IApp } from '../../../domain/app';
import { IError } from '../../../domain/common';
import { AnyAction } from 'redux';
import * as ACTION_TYPES from '../actions/action-types';

const appInitState: IApp = {
  isOnboardingCompleted: false,
  isAuthenticated: false,
  isWalletVerified: false,
  network: createNetwork(process.env.NETWORK || 'liquid'),
};

export function appReducer(state: IApp = appInitState, { type, payload }: AnyAction): IApp {
  switch (type) {
    case ACTION_TYPES.AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case ACTION_TYPES.AUTHENTICATION_FAILURE: {
      return {
        ...state,
        errors: { auth: { message: payload.error.message } as IError },
      };
    }
    case ACTION_TYPES.VERIFICATION_SUCCESS: {
      return {
        ...state,
        isWalletVerified: true,
      };
    }

    case ACTION_TYPES.ONBOARDING_COMPLETETED: {
      return {
        ...state,
        isOnboardingCompleted: true,
      };
    }

    case ACTION_TYPES.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }

    case ACTION_TYPES.CHANGE_NETWORK_SUCCESS: {
      return {
        ...state,
        network: payload.network,
      };
    }

    default:
      return state;
  }
}