export const tags = {
  1: {
    id: 1,
    name: "TestyTest",
  },
  2: {
    id: 2,
    name: "bloop",
  },
  3: {
    id: 3,
    name: "beeepeep",
  },
  4: {
    id: 4,
    name: "meeeeP",
  },
  5: {
    id: 5,
    name: "cool AP tag",
  },
}

export const ssids = {
  1: {
    id: 1,
    name: "poopoopeepee",
    isEnabled: true,
    band: 1,
    encryption: "802.1x",
    vlan: 132,
    bandwidthLimit: "10 Mbps",
    tags: [1, 2, 5],
  },
  2: {
    id: 2,
    name: "poopoopeepee - guest",
    isEnabled: true,
    band: 3,
    encryption: "802.1x",
    vlan: 132,
    bandwidthLimit: null,
    tags: [2, 4],
  },
  3: {
    id: 3,
    name: "poopoopeepee - warehouse",
    isEnabled: false,
    band: 3,
    encryption: "802.1x",
    vlan: 132,
    bandwidthLimit: "25 Mbps",
    tags: [2, 3, 5],
  },
  4: {
    id: 4,
    name: "poopoopeepee - daycare",
    isEnabled: false,
    band: 2,
    encryption: "802.1x",
    vlan: 132,
    bandwidthLimit: null,
    tags: [1],
  },
  5: {
    id: 5,
    name: "poopoopeepee - dorms",
    isEnabled: true,
    band: 1,
    encryption: "802.1x",
    vlan: 132,
    bandwidthLimit: "10 Mbps",
    tags: [4, 5],
  },
};
