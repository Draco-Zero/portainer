package kubernetes

import (
	"time"

	rbacv1 "k8s.io/api/rbac/v1"
)

type (
	K8sRoleBinding struct {
		Name         string           `json:"name"`
		Namespace    string           `json:"namespace"`
		RoleRef      rbacv1.RoleRef   `json:"roleRef"`
		Subjects     []rbacv1.Subject `json:"subjects"`
		CreationDate time.Time        `json:"creationDate"`
	}
)
