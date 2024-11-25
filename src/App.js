import React, { useState } from 'react';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    
    setMousePos({
      screen: { x: e.screenX, y: e.screenY },
      client: { x: e.clientX, y: e.clientY },
      page: { x: e.pageX, y: e.pageY },
      offset: { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
    });
  };

  return (
    <div className="w-full max-w-4xl p-8 mx-auto">
      {/* Screen */}
      <div className="bg-gray-200 p-4 rounded-lg border-2 border-gray-400">
        <div className="text-sm mb-2">Screen (screenX, screenY)</div>
        
        {/* Browser Window */}
        <div className="bg-white p-4 rounded border-2 border-gray-300">
          <div className="text-sm mb-2">Browser Window (clientX, clientY)</div>
          
          {/* Webpage */}
          <div className="bg-white p-4 rounded border-2 border-gray-200 min-h-[300px]">
            <div className="text-sm mb-2">Webpage (pageX, pageY)</div>
            
            {/* Target Element */}
            <div 
              className="bg-blue-100 p-4 rounded border-2 border-blue-300 min-h-[150px] relative cursor-crosshair"
              onMouseMove={handleMouseMove}
            >
              <div className="text-sm">Target Element (offsetX, offsetY)</div>
              
              {/* Coordinate Display */}
              <div className="absolute bottom-2 right-2 bg-white p-2 rounded shadow text-xs">
                {mousePos.offset && (
                  <>
                    <div className="text-purple-600">offset: ({mousePos.offset.x}, {mousePos.offset.y})</div>
                    <div className="text-green-600">client: ({mousePos.client.x}, {mousePos.client.y})</div>
                    <div className="text-blue-600">page: ({mousePos.page.x}, {mousePos.page.y})</div>
                    <div className="text-red-600">screen: ({mousePos.screen.x}, {mousePos.screen.y})</div>
                  </>
                )}
              </div>
            </div>
            
            {/* Legend */}
            <div className="mt-4 p-2 bg-white border rounded shadow-sm">
              <div className="text-sm font-medium mb-1">Coordinate Systems:</div>
              <div className="text-xs space-y-1">
                <div className="text-purple-600">▪ offsetX/Y: Relative to element</div>
                <div className="text-green-600">▪ clientX/Y: Relative to viewport</div>
                <div className="text-blue-600">▪ pageX/Y: Relative to document</div>
                <div className="text-red-600">▪ screenX/Y: Relative to screen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
