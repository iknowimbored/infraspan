export interface CaptchaInputs {
  token: string;
}

export interface CaptchaResponse {
  success: boolean;
  challenge_ts: string;
  hostname: string;
  credit: boolean;
}
