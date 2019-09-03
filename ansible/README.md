# Wordpress Deployment on GKE

>Deploy WordPress

`ansible-playbook playbooks/deploySite.yml --extra-vars="fullnameOverride=kube4 DBNAME=kube4 DBUSER=kube4 WPDOMAIN=kube4.com WPTITLE=kube4 WPADMIN=kube4 WPEMAIL=kube4@kube4.com INSTANCEIP=1.1.1.1 CONTAINERHTTPPORT='' CONTAINERSSHPORT='' SITETYPE=live DOMAIN=kube4.com IS_WWW=yo DBPASSWORD=kube4 WPPASSWORD=kube4 SSHROOTPASS=kube4 SSHUSERNAME=kube4 SSHUSERPASS=kube4 MYSQLROOTPASS=kube4`

>Delete WordPress

`ansible-playbook playbooks/deleteSite.yml --extra-vars="releaseName=kube4-v1"`
 
Note : 

* releaseName is {{fullnameOverride}}-v1.
* manually remove enteries from ingress resource for now.
