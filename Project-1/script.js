let news = [
  {
      title: "TypeScript Introduction",
      url: "https://charanmn7.hashnode.dev/typescript-introduction",
      author: "Charan"
  }
];

const menu = () => Number(prompt(`
Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit
`));

// Show links
const allLinks = links => {
  let list = "";
  for(let i = 0; i < links.length; i++) {
      const link = links[i];
      list += `${i+1}: ${link.title} (${link.url}). Author: ${link.author}\n`;
  }
  return list;
};

// Adding a new link
const httpChecker = link => (link.startsWith("http://") || link.startsWith("https://"));
const httpAdder = link => "http://"+link;
const newLink = () => {
  let link = {}
  link.title = prompt("Enter the title:");
  url = prompt("Enter the URL:");
  if (httpChecker(url)){
      link.url = url;
  } else {
      link.url = httpAdder(url);
  }
  link.author = prompt("Enter the author's name:");
  return link;
};

// Removing a link using its index
const indexOfLink = () => {
  let n = -1;
  while(n >= 0 && n < news.length) {
      n = Number(prompt(`Please enter an index between 1 and ${news.length} to remove it:`));
  }
  return n;
};

// Main
let run = true;
while(run) {
  let choice = menu();
  switch(choice){
      case 1:
          alert(allLinks(news));
          break;
      case 2:
          news.push(newLink()); // Changes Global State
          break;
      case 3:
          news.splice(indexOfLink(), 1);
          break;
      case 0:
          run = false;
          alert("Thanks for visiting!");
          break;
      default:
          alert("Please enter a valid choice.");
  }
}