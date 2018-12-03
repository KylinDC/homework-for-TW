function alertNumber() {
  if (event.target.nodeName.toLowerCase() === 'li') {
    alert(event.target.innerHTML);
  }
}
