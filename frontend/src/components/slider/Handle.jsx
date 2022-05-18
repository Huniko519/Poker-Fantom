import React from 'react';

function Handle({
  handle: { id, value, percent },
  getHandleProps
}) {
  return (
    <div
      style={{
        left: `${percent}%`,
        position: 'absolute',
        marginLeft: -4,
        marginTop: 31,
        zIndex: 2,
        width: 15,
        height: 15,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#e31b21',
        color: '#aaa',
      }}
      {...getHandleProps(id)}
    >
      <div style={{ display: 'flex', textShadow: '2px 2px 8px rgba(0,0,0,0.95)', justifyContent: 'center', fontFamily: 'Roboto', fontSize: 10, marginTop: 30}} >
        {value}
      </div>
    </div>

  )
}

export default Handle;