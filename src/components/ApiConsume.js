async function getAssets() {
    const req = await fetch("http://localhost:3000/assets");
    const dataAssets = await req.json();
    return dataAssets;
}

export default { getAssets };