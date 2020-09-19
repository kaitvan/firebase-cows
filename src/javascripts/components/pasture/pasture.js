import cowData from '../../helpers/data/cowData';

const cowsOnDom = (obj) => {
  $('#pasture').html('');
  Object.keys(obj).forEach((item) => {
    $('#pasture').append(`<h3>${obj[item].name}</h3>`);
  });
};

const buildCows = () => {
  cowData.getCows()
    .then((response) => cowsOnDom(response.data, Object.keys(response.data)))
    .catch((error) => console.error('get cows broke', error));
  console.warn(cowData.getCows());
};

export default { buildCows };
