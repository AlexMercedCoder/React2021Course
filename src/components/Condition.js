/// //////////////////////////////
// Condition
/// //////////////////////////////

export const Condition = (props) => {
    let wrong = props.ifnot ?? null
    wrong = wrong instanceof Function ? wrong() : wrong
    let result
    console.log('Children', props.children)
    console.log('Wrong', wrong)
  
    if (props.children instanceof Function) {
      result = props.if ? props.children() : wrong
    } else {
      result = props.if ? props.children : wrong
    }
  
    console.log(result)
  
    return result ? result : <h1>Something Wrong</h1>
  }