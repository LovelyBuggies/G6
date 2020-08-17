import G6 from '@antv/g6';
import insertCss from 'insert-css';

insertCss(`
  .g6-tooltip {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #545454;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
`);

const data = {
  nodes: [
    {
      id: '0',
      label: 'node-0',
      x: 100,
      y: 100,
      description: 'This is node-0.',
      subdescription: 'This is subdescription of node-0.',
    },
    {
      id: '1',
      label: 'node-1',
      x: 250,
      y: 100,
      description: 'This is node-1.',
      subdescription: 'This is subdescription of node-1.',
    },
    {
      id: '2',
      label: 'node-2',
      x: 150,
      y: 310,
      description: 'This is node-2.',
      subdescription: 'This is subdescription of node-2.',
    },
    {
      id: '3',
      label: 'node-3',
      x: 320,
      y: 310,
      description: 'This is node-3.',
      subdescription: 'This is subdescription of node-3.',
    },
  ],
  edges: [
    {
      id: 'e0',
      source: '0',
      target: '1',
      description: 'This is edge from node 0 to node 1.',
    },
    {
      id: 'e1',
      source: '0',
      target: '2',
      description: 'This is edge from node 0 to node 2.',
    },
    {
      id: 'e2',
      source: '0',
      target: '3',
      description: 'This is edge from node 0 to node 3.',
    },
  ],
};
const width = document.getElementById('container').scrollWidth;
const height = document.getElementById('container').scrollHeight || 500;
const graph = new G6.Graph({
  container: 'container',
  width,
  height,
  linkCenter: true,
  defaultNode: {
    size: [80, 40],
    type: 'rect',
    style: {
      fill: '#DEE9FF',
      stroke: '#5B8FF9',
    },
  },
  defaultEdge: {
    style: {
      stroke: '#b5b5b5',
      lineAppendWidth: 3,
    },
  },
  modes: {
    default: [
      'drag-node',
      {
        type: 'tooltip',
        formatText: function formatText(model) {
          const text = 'description: ' + model.description;
          return text;
        },
        offset: 30,
      },
      {
        type: 'edge-tooltip',
        formatText: function formatText(model) {
          const text = 'description: ' + model.description;
          return text;
        },
        offset: 30,
      },
    ],
  },
});
graph.data(data);
graph.render();
