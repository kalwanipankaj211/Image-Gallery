import { environment } from '../../environments/environment';
import { Constants } from './constants/app.constants';


declare var require: any;
export function onAppInit(): () => Promise<any> {
    return (): Promise<any> => {
        return new Promise<void>((resolve, reject) => {
            if (!environment.production) {
                // const env = require('./../../../environments/runtime-env-overrides.json');
                if (environment.useContextUrl) {
                    const baseUrl = window.location.href.split('#')[0];
                    environment.apiURL = (baseUrl[baseUrl.length - 1] === '/') ? baseUrl.substring(0, baseUrl.length - 1) : baseUrl;
                }
            } else {
                const baseUrl = window.location.href.split('#')[0];
                environment.apiURL = (baseUrl[baseUrl.length - 1] === '/') ? baseUrl.substring(0, baseUrl.length - 1) : baseUrl;
            }

            resolve();
        });
    };
}
