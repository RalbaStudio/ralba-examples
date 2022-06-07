import { ModuleWithProviders, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';

export function init_appconfiguration(
  configurationService: ConfigurationService
) {
  return () => configurationService.load();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [ConfigurationService],
})
export class AppConfigModule {
  static forRoot(configfile?: string): ModuleWithProviders<AppConfigModule> {
    return {
      ngModule: AppConfigModule,
      providers: [
        {
          provide: 'APP_CONFIG_NAME',
          useValue: configfile || 'appconfig.json',
        },
      ],
    };
  }
}
