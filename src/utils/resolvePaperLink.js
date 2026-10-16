function resolvePaperLink(link) {
  if (link.startsWith("http://") || link.startsWith("https://")) return link;

  return `/papers/${link.replace(/^\/?(?:papers\/)?/, "")}`;
}

export default resolvePaperLink;
