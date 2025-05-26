
const ActivityChart = () => {
    const weekData = [
        {
            day: 'Mon',
            lines: [
                { segments: [{ start: 0, height: 60, color: 'bg-gray-300' }] },
                { segments: [{ start: 30, height: 40, color: 'bg-cyan-400' }] },
                {
                    segments: [
                        { start: 0, height: 20, color: 'bg-blue-600' },
                        { start: 25, height: 25, color: 'bg-blue-600' }
                    ]
                },
                { segments: [{ start: 0, height: 25, color: 'bg-gray-300' }] }
            ]
        },
        {
            day: 'Tues',
            lines: [
                { segments: [{ start: 0, height: 70, color: 'bg-cyan-400' }] },
                { segments: [{ start: 20, height: 45, color: 'bg-blue-600' }] },
                {
                    segments: [
                        { start: 0, height: 18, color: 'bg-gray-300' },
                        { start: 23, height: 20, color: 'bg-gray-300' }
                    ]
                },
                { segments: [{ start: 0, height: 12, color: 'bg-cyan-400' }] }
            ]
        },
        {
            day: 'Wed',
            lines: [
                { segments: [{ start: 0, height: 40, color: 'bg-gray-300' }] },
                { segments: [{ start: 15, height: 30, color: 'bg-cyan-400' }] },
                {
                    segments: [
                        { start: 0, height: 22, color: 'bg-blue-600' },
                        { start: 25, height: 18, color: 'bg-blue-600' }
                    ]
                }
            ]
        },
        {
            day: 'Thurs',
            lines: [
                { segments: [{ start: 0, height: 55, color: 'bg-cyan-400' }] },
                { segments: [{ start: 22, height: 38, color: 'bg-gray-300' }] },
                {
                    segments: [
                        { start: 0, height: 25, color: 'bg-blue-600' },
                        { start: 27, height: 30, color: 'bg-blue-600' }
                    ]
                },
                { segments: [{ start: 0, height: 15, color: 'bg-gray-300' }] }
            ]
        },
        {
            day: 'Fri',
            lines: [
                { segments: [{ start: 0, height: 60, color: 'bg-cyan-400' }] },
                { segments: [{ start: 25, height: 40, color: 'bg-blue-600' }] },
                {
                    segments: [
                        { start: 0, height: 20, color: 'bg-gray-300' },
                        { start: 23, height: 22, color: 'bg-gray-300' }
                    ]
                },
                { segments: [{ start: 0, height: 32, color: 'bg-cyan-400' }] }
            ]
        },
        {
            day: 'Sat',
            lines: [
                { segments: [{ start: 0, height: 45, color: 'bg-gray-300' }] },
                {
                    segments: [
                        { start: 0, height: 28, color: 'bg-gray-300' },
                        { start: 30, height: 20, color: 'bg-gray-300' }
                    ]
                },
                { segments: [{ start: 18, height: 35, color: 'bg-blue-600' }] }
            ]
        },
        {
            day: 'Sun',
            lines: [
                { segments: [{ start: 0, height: 50, color: 'bg-cyan-400' }] },
                { segments: [{ start: 20, height: 30, color: 'bg-gray-300' }] },
                {
                    segments: [
                        { start: 0, height: 22, color: 'bg-blue-600' },
                        { start: 26, height: 18, color: 'bg-blue-600' }
                    ]
                }
            ]
        }
    ];

    const maxHeight = 80;

    return (
        <div className="flex items-end justify-between space-x-3 h-32 px-2">
            {weekData.map((dayData, dayIndex) => (
                <div key={dayIndex} className="flex flex-col items-center flex-1">

                    <div className="flex items-end justify-center space-x-0.5 mb-2 relative" style={{ height: `${maxHeight}px` }}>
                        {dayData.lines.map((line, lineIndex) => (
                            <div key={lineIndex} className="relative w-2 flex flex-col justify-end" style={{ height: `${maxHeight}px` }}>
                                {line.segments.map((segment, segmentIndex) => (
                                    <div
                                        key={segmentIndex}
                                        className={`w-full ${segment.color} rounded-full absolute transition-all duration-300 hover:opacity-80`}
                                        style={{
                                            height: `${segment.height}px`,
                                            bottom: `${segment.start}px`
                                        }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                   
                    <span className="text-gray-500 text-xs font-medium">
                        {dayData.day}
                    </span>
                </div>
            ))}
        </div>
    );
};
export default ActivityChart;