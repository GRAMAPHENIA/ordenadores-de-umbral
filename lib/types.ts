export interface Scene {
  id: string
  text: string
  choices: Choice[]
}

export interface Choice {
  functionName: string
  description?: string
  effects?: {
    energy?: number
    mood?: number
    time?: number
    bugs?: number
  }
  nextScene?: Scene
}
