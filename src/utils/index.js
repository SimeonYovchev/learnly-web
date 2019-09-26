export const createConstants = (...constants) => {
  return constants.reduce((acc, constant) => ({
    ...acc,
    [constant]: constant,
  }), {});
};

export const createReducer = (initialState, reducerMap) => {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ?
      reducer(state, action.payload) :
      state;
  };
};

// export const formatLastPracticed = (lastPracticedDate) => {
//   const practicedDate = new Date(lastPracticedDate);
//   const now = new Date();

//   const differenceInSeconds = (now.getTime() - practicedDate.getTime()) / 1000;
//   const differenceInMinutes = Math.floor((differenceInSeconds / 60));
//   let result = '';

//   if (differenceInMinutes > 0 && differenceInMinutes < 60) {
//     result = differenceInMinutes === 1 ? `${differenceInMinutes} min ago` : `${differenceInMinutes} mins ago`;
//   } else if (differenceInMinutes >= 60 && differenceInMinutes < 1440) {
//     result = differenceInMinutes >= 60 && differenceInMinutes < 120 ? `${Math.floor((differenceInMinutes / 60))} hour ago` : `${Math.floor((differenceInMinutes / 60))} hours ago`;
//   } else if (differenceInMinutes >= 1440 && differenceInMinutes < 43920) {
//     result = `${Math.floor((differenceInMinutes / 60))} months ago`;
//   } else if (differenceInMinutes >= 43920 && differenceInMinutes < 527040) {
//     result = `${Math.floor((differenceInMinutes / 60))} years ago`;
//   }
//   return result;
// };

const timeMap = {
  moment: {
    range: [0, 1],
    text: 'moment ago',
    minutes: 1,
  },
  min: {
    range: [1, 2],
    text: 'min ago',
    minutes: 1,
  },
  mins: {
    range: [2, 60],
    text: 'mins ago',
    minutes: 1,
  },
  hour: {
    range: [60, 120],
    text: 'hour ago',
    minutes: 60,
  },
  hours: {
    range: [120, 1440],
    text: 'hours ago',
    minutes: 60,
  },
  day: {
    range: [1440, 2880],
    text: 'day ago',
    minutes: 1440,
  },
  days: {
    range: [2880, 43919],
    text: 'days ago',
    minutes: 1440,
  },
  month: {
    range: [43919, 87837],
    text: 'month ago',
    minutes: 43919,
  },
  months: {
    range: [87838, 525600],
    text: 'months ago',
    minutes: 43919,
  },
};

export const formatLastPracticed = (lastPracticedDate) => {
  const practicedDate = new Date(lastPracticedDate);
  const now = new Date();

  const differenceInSeconds = (now.getTime() - practicedDate.getTime()) / 1000;
  const differenceInMinutes = Math.floor((differenceInSeconds / 60));
  let result = '';
  // console.log(differenceInMinutes);

  Object.entries(timeMap).forEach(([key, props]) => {
    if (differenceInMinutes >= props.range[0] && differenceInMinutes < props.range[1]) {
      result = `${Math.floor((differenceInMinutes / props.minutes))} ${props.text}`;
    }
  });

  return result;
};
