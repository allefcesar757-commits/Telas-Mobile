document.addEventListener('DOMContentLoaded', () => {

  // 1. Mostrar e Ocultar Senha
  const eyeToggle = document.querySelector('.eye-toggle');
  const passwordInput = document.getElementById('senha');

  if (eyeToggle && passwordInput) {
    eyeToggle.addEventListener('click', () => {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      eyeToggle.style.opacity = isPassword ? '0.5' : '1';
    });
  }

  // 2. Alternar entre as Abas (Entrar / Primeiro Acesso)
  const tabButtons = document.querySelectorAll('.tab-btn');
  const btnText = document.getElementById('btn-text');
  const forgotLink = document.getElementById('forgot-link');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const isCadastro = button.getAttribute('data-tab') === 'cadastro';
      if (btnText) {
        btnText.textContent = isCadastro ? 'Validar e Cadastrar' : 'Acessar Plataforma';
      }
      if (forgotLink) {
        forgotLink.style.display = isCadastro ? 'none' : 'inline-block';
      }
    });
  });

  // 3. Controle do Tamanho da Fonte (A- / A+)
  const btnFontUp = document.getElementById('btn-font-up');
  const btnFontDown = document.getElementById('btn-font-down');
  let currentFontSize = 100; // %

  if (btnFontUp && btnFontDown) {
    btnFontUp.addEventListener('click', () => {
      if (currentFontSize < 120) {
        currentFontSize += 10;
        document.body.style.fontSize = `${currentFontSize}%`;
        btnFontUp.classList.add('active');
        btnFontDown.classList.remove('active');
      }
    });

    btnFontDown.addEventListener('click', () => {
      if (currentFontSize > 90) {
        currentFontSize -= 10;
        document.body.style.fontSize = `${currentFontSize}%`;
        btnFontDown.classList.add('active');
        btnFontUp.classList.remove('active');
      }
    });
  }

  // 4. Botão de Alto Contraste
  const contrastBtn = document.querySelector('.contrast-toggle');
  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
    });
  }

  // 5. Clique no Botão Libras
  const librasBtn = document.querySelector('.libras-btn');
  if (librasBtn) {
    librasBtn.addEventListener('click', () => {
      alert('Suporte em Libras ativado! O interprete virtual de Libras seria iniciado aqui.');
    });
  }

  // 6. Envio do Formulário
  const form = document.getElementById('login-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.getElementById('identificador').value;
      alert(`Tentativa de login enviada para o usuário: ${user}`);
    });
  }

});