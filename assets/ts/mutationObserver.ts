

interface observerOptions {
  [key: string]: boolean;
}

// Callback function to execute when mutations are observed-
const callback = (observer: any) => {
  console.log(observer)
};

// Watch for the first instance of dynamic-node
const targetNode: Node = document.getElementById('dynamic-node')!;

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode);

// Later, you can stop observing
observer.disconnect();

