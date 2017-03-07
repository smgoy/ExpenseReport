import Ajax from 'simple-ajax';

export const login = (userCredentials, success, error) => {
  const ajax = new Ajax({
    url: `api/login`,
    method: 'POST',
    dataType: 'json',
    data: userCredentials
  });

  ajax.on('success', success);
  ajax.on('error', error);

  ajax.send();
};
