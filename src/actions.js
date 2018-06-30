export default {
  setInput(args, state) {
    console.log('hola');
    state.set(args.key, args.value);
  }
}