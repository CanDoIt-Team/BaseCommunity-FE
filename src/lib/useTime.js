export const useGetTime = (time) => {
  const timeSplit = time.split('T');

  return timeSplit[0]
}

