export interface Adapter {
  capture (error: Error, additionalData: any): Promise<any>
}

export interface Raven {
  captureException (error: Error, additionalData: any, callback: Function): string
}

export class RavenAdapter implements Adapter {
  constructor (raven: Raven)

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
