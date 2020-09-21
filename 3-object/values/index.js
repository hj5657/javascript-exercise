export default function countTypesNumber(source) {
  // TODO 6: 在这里写实现代码
  const result = Object.values(source);
  let sum = 0;
  result.forEach(function transAndSum(item) {
    sum += Number(item);
  });
  return sum;
}
