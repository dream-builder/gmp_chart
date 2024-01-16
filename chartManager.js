class CanvasManager {
    constructor(width, height) {
      this.canvas = document.createElement('canvas');
      this.canvas.width = width;
      this.canvas.height = height;
      this.context = this.canvas.getContext('2d');
      document.body.appendChild(this.canvas);
    }
  
    setCanvasSize(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  
    drawLine(x1, y1, x2, y2, color = 'black', lineWidth = 1) {
      this.context.beginPath();
      this.context.moveTo(x1, y1);
      this.context.lineTo(x2, y2);
      this.context.strokeStyle = color;
      this.context.lineWidth = lineWidth;
      this.context.stroke();
    }
  
    drawCircle(x, y, radius, color = 'black', lineWidth = 1) {
      this.context.beginPath();
      this.context.arc(x, y, radius, 0, 2 * Math.PI);
      this.context.strokeStyle = color;
      this.context.lineWidth = lineWidth;
      this.context.stroke();
    }
  
    drawPolygon(points, color = 'black', lineWidth = 1) {
      if (points.length < 3) {
        console.error('A polygon needs at least 3 points.');
        return;
      }
  
      this.context.beginPath();
      this.context.moveTo(points[0].x, points[0].y);
  
      for (let i = 1; i < points.length; i++) {
        this.context.lineTo(points[i].x, points[i].y);
      }
  
      this.context.closePath();
      this.context.strokeStyle = color;
      this.context.lineWidth = lineWidth;
      this.context.stroke();
    }
  }
  
  // Example usage:
  const canvasManager = new CanvasManager(400, 300);
  
  // Draw a line
  canvasManager.drawLine(50, 50, 150, 50, 'blue', 2);
  
  // Draw a circle
  canvasManager.drawCircle(250, 150, 30, 'red', 3);
  
  // Draw a polygon
  const polygonPoints = [
    { x: 100, y: 200 },
    { x: 150, y: 250 },
    { x: 200, y: 200 },
  ];
  canvasManager.drawPolygon(polygonPoints, 'green', 2);
  