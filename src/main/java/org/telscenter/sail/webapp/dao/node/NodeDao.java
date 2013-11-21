package org.telscenter.sail.webapp.dao.node;

import java.util.List;

import vle.domain.node.Node;
import net.sf.sail.webapp.dao.SimpleDao;

public interface NodeDao<T extends Node> extends SimpleDao<T> {

	public Node getNodeByNodeIdAndRunId(String nodeId, String runId);
	
	public Node getNodeByNodeIdAndRunId(String nodeId, String runId, boolean createIfNotFound);
	
	public List<Node> getNodesByNodeIdsAndRunId(List<String> nodeIds, String runId);
	
	public List<Node> getNodesByRunId(String runId);
}
