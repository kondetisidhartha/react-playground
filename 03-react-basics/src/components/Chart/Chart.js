import './css/Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  // Converts array to just numbers
  const maxDataPointValue = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={maxDataPointValue}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
