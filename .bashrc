


const open = () => {
  explorer.exe `$(wslpath -w "$1")` path.resolve(__dirname, './dist/index.html');
}
export -f open;