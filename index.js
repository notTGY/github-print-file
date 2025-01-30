const init = () => {
  const downloadRawButton = document.querySelector('button[data-testid=download-raw-button]')
  if (!downloadRawButton) {
    return
  }
  const myButton = document.querySelector('button[data-testid=github-print-button]')
  if (myButton) {
    return
  }
  const downloadRawLabel = downloadRawButton.parentElement
  const bar = downloadRawLabel.parentElement.parentElement

  const newContainer = document.createElement('div')
  const newLabel = document.createElement('span')
  const newButton = document.createElement('button')

  newLabel.setAttribute('role', 'tooltip')
  newLabel.setAttribute('aria-label', 'Print content')
  newLabel.className = downloadRawLabel.className

  newButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>`

  newButton.className = downloadRawButton.className
  newButton.setAttribute('data-size', 'small')
  newButton.setAttribute('data-variant', 'default')
  newButton.setAttribute('aria-label', 'Print content')
  newButton.setAttribute('data-testid', 'github-print-button')

  newButton.addEventListener('click', () => {
    window.print()
  })

  newLabel.append(newButton)
  newContainer.append(newLabel)
  bar.append(newContainer)
}

navigation.addEventListener('navigate', init)
document.addEventListener('mousemove', init)
document.addEventListener('load', init)
init()
