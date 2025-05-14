emailjs.init("UljLOF8MuITrQF360"); 

document.getElementById('homework-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const fileInput = form.file;

  if (fileInput.files.length === 0) {
    alert("Пожалуйста, выберите файл.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const base64File = reader.result.split(',')[1];

    emailjs.send("service_a2646hr", "template_h6osyhi", {
      user_email: form.user_email.value,
      message: form.message.value,
      file: base64File,
      file_name: fileInput.files[0].name,
    }).then(() => {
      document.getElementById('status-message').innerHTML =
        "<div class='alert alert-success'>Файл успешно отправлен!</div>";
      form.reset();
    }).catch((error) => {
      console.error(error);
      document.getElementById('status-message').innerHTML =
        "<div class='alert alert-danger'>Ошибка при отправке. Попробуйте позже.</div>";
    });
  };

  reader.readAsDataURL(fileInput.files[0]);
});
