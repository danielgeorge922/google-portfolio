const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Daniel_George_Resume.pdf';
    link.click();
  };

export { downloadResume };
