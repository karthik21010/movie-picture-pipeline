useEffect(() => {
    if (!movie || !movie.id) {
        return;
    }

    const apiUrl =
        `${process.env.REACT_APP_MOVIE_API_URL}/movies/${movie.id}`;

    console.log("API URL:", apiUrl);

    axios
        .get(apiUrl)
        .then((response) => {
            console.log("API SUCCESS:", response.data);
            setDetails(response.data);
        })
        .catch((error) => {
            console.error("API ERROR:", error);
            console.error("API URL:", apiUrl);
        });
}, [movie]);