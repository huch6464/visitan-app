export async function sendOtp(mobile) {
 try {
  const formData = new FormData();
  formData.append('mobile', mobile);

  const res = await fetch('https://develop-test.visiton.ir/api/v1/authenticate/otp', {
    method: 'POST',
    body: formData,
  });

  if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
 }catch (error) {
    console.error('Error in sendOtp:', error);
    throw error;
  }
}

export async function confirmOtp(mobile, code, device_id, role_group ) {
  const formData = new FormData();
  formData.append('mobile', mobile);
  formData.append('code', code);
  formData.append('device_id', device_id);
  formData.append('role_group', role_group);

  const res = await fetch('https://develop-test.visiton.ir/api/v1/authenticate/otp-confirm', {
    method: 'POST',
    body: formData,
  });

  return await res.json();
}
