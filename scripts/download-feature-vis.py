import os

units = [186, 110, 86, 117, 180, 136, 153, 112, 70, 108, 132, 106, 113, 88, 160]

os.makedirs("../static/images/1.1-feature-vis")
for unit in units:
    url = f"https://openai-clarity.storage.googleapis.com/model-visualizer%2F1556758232%2FInceptionV1%2Ffeature_visualization%2Falpha%3DFalse%26layer_name%3Dmixed3a%26negative%3DFalse%26objective_name%3Dneuron%2Fchannel_index={unit}.png"
    os.system(f'wget -O ../static/images/1.1-feature-vis/neuron-{unit}.png "{url}"')

