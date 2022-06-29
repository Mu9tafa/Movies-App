import axiosInstance from '../../network/axiosInstance';

const getAllMovies = (page, lang) => (dispatch) => {
  const fetchData = async () => {
    const response = await axiosInstance.get(
      `/popular?page=${page}&language=${lang}`
    );
    // setMovies(response.data.results);
    dispatch({
      type: 'GET_ALL_MOVIES',
      payload: response.data.results,
    });
  };

  fetchData();
};

export default getAllMovies;
