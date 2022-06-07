import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
// import get from 'lodash/get';
// TODO: check import size
import { get } from 'lodash';

export const APP_CONFIG_NAME = 'APP_CONFIG_NAME';
@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  private config: Record<string, unknown> = {};
  /**
   *
   */
  constructor(
    private readonly http: HttpClient,
    @Inject(APP_CONFIG_NAME) private readonly configFile: string
  ) {}

  public get<T extends string | number | boolean = string>(
    path: string,
    defaultValue?: T
  ): T | undefined {
    return get(this.config, path, defaultValue) as T;
  }

  public async load(base_path: string = ''): Promise<ConfigurationService> {
    return await this.http
      .get(`${base_path}assets/${this.configFile || 'appconfig.json'}`)
      .toPromise()
      .then((response) => {
        this.config = response as Record<string, unknown>;
        return this;
      })
      .catch((error) => error);
  }
}
