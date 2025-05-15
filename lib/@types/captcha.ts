export interface CaptchaInputsI {
  token: string;
}

export interface CaptchaResponseI {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  credit: boolean;
}
