const setObserver = (element: HTMLElement, callBack: Function, observerOptions: object = {}) => {
  console.log('setting observer')
  
  const options = {
    // rootMargin: '-50% 0% -50% 0%',
    threshold: 1.0,
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