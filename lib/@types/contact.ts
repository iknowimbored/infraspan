export interface ContactUsInputs {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
}

export interface SendResponse {
  success: boolean;
}
