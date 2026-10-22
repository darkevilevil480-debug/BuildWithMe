document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

const form = document.getElementById('order-form');

if (form) {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('plan');
  const select = document.getElementById('plan');

  if (requested && select) {
    const map = {
      Basic: 'Basic Website — $3 / 4 pages',
      Standard: 'Standard Website — $5 / 6 pages',
      Custom: 'Custom Website — quote after discussion',
      Thumbnail: 'Thumbnail — $1 each'
    };
    if (map[requested]) select.value = map[requested];
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    const data = new FormData(form);
    const recipient = 'darkevilevil480@gmail.com';
    const subject = 'BuildWithMe project enquiry — ' + data.get('plan');
    const body = [
      'Hello Muneeb,',
      '',
      'My name: ' + data.get('name'),
      'My email: ' + data.get('email'),
      'Service: ' + data.get('plan'),
      '',
      'Project details:',
      data.get('details'),
      '',
      'Sent via BuildWithMe website.'
    ].join('\n');

    // Open Gmail's compose screen with the customer's details pre-filled.
    // The customer must be signed in and press Send; this static site cannot send mail itself.
    const gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1'
      + '&to=' + encodeURIComponent(recipient)
      + '&su=' + encodeURIComponent(subject)
      + '&body=' + encodeURIComponent(body);

    const status = document.getElementById('form-status');
    status.textContent = 'Opening Gmail with your order details. Review the message and press Send in Gmail to submit your order.';

    const newTab = window.open(gmailUrl, '_blank');
    if (!newTab) {
      // If the browser blocks a new tab, open Gmail in the current tab instead.
      window.location.href = gmailUrl;
    }
  });
}

const canvas = document.getElementById('canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const title = document.getElementById('title');
  const subtitle = document.getElementById('subtitle');
  const bg = document.getElementById('bg');
  const accent = document.getElementById('accent');
  const style = document.getElementById('style');

  function draw() {
    const w = canvas.width, h = canvas.height;
    ctx.fillStyle = bg.value;
    ctx.fillRect(0, 0, w, h);

    if (style.value === 'bold') {
      ctx.fillStyle = accent.value;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(390, 0);
      ctx.lineTo(0, 390);
      ctx.fill();
      ctx.fillRect(0, 620, w, 100);
    } else if (style.value === 'luxury') {
      ctx.strokeStyle = accent.value;
      ctx.lineWidth = 8;
      ctx.strokeRect(35, 35, w - 70, h - 70);
      ctx.fillStyle = '#222';
      ctx.fillRect(70, 70, w - 140, h - 140);
    } else {
      ctx.fillStyle = accent.value;
      ctx.fillRect(0, 0, 18, h);
      ctx.fillRect(0, h - 18, w, 18);
    }

    ctx.textAlign = 'left';
    ctx.fillStyle = accent.value;
    ctx.font = '700 30px Arial';
    ctx.fillText('BUILDWITHME / CREATIVE STUDIO', 80, 105);

    ctx.fillStyle = '#ffffff';
    const words = (title.value || 'YOUR NEXT BIG IDEA').toUpperCase().split(' ');
    const lines = [];
    let line = '';
    ctx.font = `900 ${style.value === 'minimal' ? 92 : 112}px Arial`;

    for (const word of words) {
      const test = line ? line + ' ' + word : word;
      if (ctx.measureText(test).width > w - 170 && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);

    let y = 300 - (lines.length - 1) * 55;
    for (const textLine of lines) {
      ctx.fillText(textLine, 80, y);
      y += 120;
    }

    ctx.fillStyle = accent.value;
    ctx.font = '800 35px Arial';
    ctx.fillText((subtitle.value || '').toUpperCase(), 84, 570);
    ctx.fillStyle = '#aaa';
    ctx.font = '24px Arial';
    ctx.fillText('MAKE IT COUNT  ↗', w - 300, h - 45);
  }

  [title, subtitle, bg, accent, style].forEach(element => element.addEventListener('input', draw));
  draw();

  document.getElementById('download').addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'buildwithme-thumbnail.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
