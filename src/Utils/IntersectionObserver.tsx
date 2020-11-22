const setObserver = (element: HTMLElement, callBack: Function, observerOptions: object = {}) => {
  const options = {
    rootMargin: '-50% 0% -50% 0%',
    ...observerOptions
  }

  const eleObserver = new IntersectionObserver((entries, eleObserver) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return
      }
      else {
        callBack()
        eleObserver.unobserve(element)
      }
    })
  }, options)
  eleObserver.observe(element)
}

export default setObserver