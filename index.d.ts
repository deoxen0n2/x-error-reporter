export interface Adapter {
  capture (error: Error, additionalData: any): Promise<any>
}

export class RavenAdapter implements Adapter {
  capture (error: Error, additionalData: any): Promise<any>
}

export interface ReporterOptions {
  enabled: boolean
}

export class Reporter {
  adapter: Adapter
  enabled: boolean

  constructor (adapter: Adapter, options: ReporterOptions)

  capture (error: Error, additionalData: any): Promise<any>
}
