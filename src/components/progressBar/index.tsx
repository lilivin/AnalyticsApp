import * as d3 from "d3";
import { useEffect, useRef } from "react";
import useWindowDimensions from "../../helpers/useWindowDimenstions";

function ProgressBar(props: { id: string; progress: number }) {
  const { id, progress } = props;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const { width: parentWidth } = useWindowDimensions(id);

  useEffect(() => {
    const svg = d3.select(svgRef.current).attr("fill", "red");

    const backgroundBar = svg
      .append("rect")
      .attr("class", "background-bar")
      .attr("height", 10)
      .attr("fill", "#ddd")

    const progressBar = svg
      .append("rect")
      .attr("class", "progress-bar")
      .attr("height", 10)
      .attr("fill", "blue")

    backgroundBar.attr("width", parentWidth);

    progressBar
      .transition()
      .duration(1000)
      .attr("width", progress * (parentWidth / 100));

    return () => {
      svg.selectAll("*").remove();
    };
  }, [id, parentWidth, progress]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const progressBar = svg.select(".progress-bar");
    const progressLabel = svg.select(".progress-label");

    progressBar
      .transition()
      .duration(500)
      .attr("width", progress * (parentWidth / 100));

    progressLabel.text(`${progress}%`);
  }, [progress, parentWidth]);

  return (
    <div id={id}>
      <svg ref={svgRef} width={parentWidth} height={10} />
    </div>
  );
}

export default ProgressBar;
